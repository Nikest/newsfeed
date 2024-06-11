<template>
  <ConnectionProvider>
    <main class="min-h-[100vh] grid bg-colorMainBg pt-20 pr-0 pb-5 pl-0 font-main">
      <ElementMainTitle>Last News</ElementMainTitle>

      <div class="pl-[400px]">
        <div class="w-[400px] h-[100vh] fixed top-0 left-0 pt-24 pb-2 pl-10 pr-5">
          <PostForm />
        </div>

        <div class="min-h-full w-full pr-10">
          <NewsList />
        </div>
      </div>

    </main>
  </ConnectionProvider>
</template>