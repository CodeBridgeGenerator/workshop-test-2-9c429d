
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
latihan: faker.lorem.sentence(1),
pelulusan: faker.lorem.sentence(1),
status: faker.lorem.sentence(1),
komen: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
