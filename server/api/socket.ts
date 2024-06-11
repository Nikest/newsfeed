import { Server as HttpServer } from 'http';
import { Server as SocketServer } from 'socket.io';
import { MongoConnect, createNewPost, likePost, getPosts, getLikesForPosts } from '~/server/db';
import { v4 as uuidv4 } from 'uuid';

const server = new HttpServer();
const io = new SocketServer(server, {
    cors: {
        origin: "*"
    }
});

MongoConnect();

let lastUpdatedHash = uuidv4();

io.on('connection', (socket) => {
    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
    });

    socket.on('newsAll', (data) => {
        getPosts(data.userId).then((posts) => {
            socket.emit('newsAll', posts);
            socket.emit('updateHash', lastUpdatedHash);
        });
    });

    socket.on('likePost', (data) => {
        likePost(data).then(() => {
            lastUpdatedHash = uuidv4();
        });
    });

    socket.on('getLikes', (data) => {

        if (data.lastUpdatedHash === lastUpdatedHash) {
            return;
        }

        getLikesForPosts(data.postIds, data.userId).then((likes) => {
            socket.emit('updateLikes', { likes });
            socket.emit('updateHash', lastUpdatedHash);
        });
    });

    socket.on('newPost', (data) => {
        createNewPost({
            ...data.post,
            id: uuidv4(),
            date: Date.now(),
            userId: data.user.id,
            user: `${data.user.firstName} ${data.user.lastName}`,

        }).then((post) => {
            lastUpdatedHash = uuidv4();
            io.emit('newPost', post);
        });
    });
});

const PORT = 3001;
server.listen(PORT);
