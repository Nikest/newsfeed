import { randomId } from '~/utils/random';
import { randomInArray } from '~/utils/random';

export function createRandomUser() {
    const firstNames = [
        "John",
        "Jane",
        "Michael",
        "Emily",
        "David",
        "Sophia",
        "Daniel",
        "Olivia",
        "Matthew",
        "Isabella"
    ];

    const lastNames = [
        "Smith",
        "Johnson",
        "Williams",
        "Brown",
        "Jones",
        "Garcia",
        "Miller",
        "Davis",
        "Rodriguez",
        "Martinez"
    ];

    return {
        id: randomId(),
        firstName: randomInArray<string>(firstNames),
        lastName: randomInArray<string>(lastNames),
    };
}