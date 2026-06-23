import bcrypt from "bcrypt";
import {prisma} from "./prisma_client";

const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
};

const generatePizza = (productId: number, type: number, size: number) => {
    return {
        productId,
        size,
        type,
        price: randomNumber(190, 600),
        carbs: randomNumber(10, 30),
        fats: randomNumber(5, 15),
        kcal: randomNumber(180, 300),
        proteins: randomNumber(20, 45),
        weight: randomNumber(400, 650),
    };
};

async function up() {
    await prisma.user.createMany({
        data: [
            {
                fullName: 'User',
                email: 'user@test.ru',
                password: await bcrypt.hash('111111', 10),
                verified: new Date(),
                role: 'USER',
            },
            {
                fullName: 'Admin',
                email: 'admin@mail.ru',
                password: await bcrypt.hash('111111', 10),
                verified: new Date(),
                role: 'ADMIN',
            }
        ]
    })
    
    // await prisma.category.createMany({
    //     data: [
    //         {
    //             name: 'Пиццы'
    //         },
    //         {
    //             name: 'Напитки'
    //         },
    //         {
    //             name: 'Закуски'
    //         },
    //         {
    //             name: 'Десерты'
    //         },
    //         {
    //             name: 'Картофель'
    //         },
    //     ]
    // })
    
    // await prisma.product.createMany({
    //     data: [
    //         {
    //             name: 'Додо',
    //             imageUrl: 'https://media.dodostatic.net/image/r:584x584/019ac604bad37209b1ec496bbdd98560.webp',
    //             categoryId: 13,
    //         },
    //         {
    //             name: 'Терияки',
    //             imageUrl: 'https://media.dodostatic.net/image/r:584x584/019a10a0c9ab792190a97768688bc6e9.webp',
    //             categoryId: 13,
    //         },
    //         {
    //             name: 'Сырная',
    //             imageUrl: 'https://media.dodostatic.net/image/r:584x584/0198bf40eb1171aabe90b1b3ce07c0c5.webp',
    //             categoryId: 13,
    //         },
    //         {
    //             name: 'Креветки со сладким чили',
    //             imageUrl: 'https://media.dodostatic.net/image/r:584x584/0198bf5147f27780a3290a82692e7a36.webp',
    //             categoryId: 13,
    //         },
    //         {
    //             name: 'Лимонад клубничный мохито',
    //             imageUrl: 'https://media.dodostatic.net/image/r:584x584/0199863554c676cd8fb4c017c9107eda.webp',
    //             categoryId: 14,
    //         },
    //         {
    //             name: 'Молочный коктейль с печеньем Орео',
    //             imageUrl: 'https://media.dodostatic.net/image/r:584x584/019986496b5276b89f66e83aa460d5b3.webp',
    //             categoryId: 14,
    //         },
    //         {
    //             name: 'Ланчбокс с куриными крыльями',
    //             imageUrl: 'https://media.dodostatic.net/image/r:584x584/019d4978527d79a99539adac6520e8c7.webp',
    //             categoryId: 15,
    //         },
    //         {
    //             name: 'Холодный чикен ролл',
    //             imageUrl: 'https://media.dodostatic.net/image/r:584x584/019edacfc81378b583226b83074acd77.webp',
    //             categoryId: 15,
    //         },
    //         {
    //             name: 'Пломбир Додокрошка',
    //             imageUrl: 'https://media.dodostatic.net/image/r:584x584/019d95cb617471dab96d30cd7efd2be1.webp',
    //             categoryId: 16,
    //         },
    //         {
    //             name: 'Пирожное Муравьешки',
    //             imageUrl: 'https://media.dodostatic.net/image/r:584x584/01980d4299eb70c2ac5b0203c228851f.webp',
    //             categoryId: 16,
    //         },
    //     ]
    // })
    
    await prisma.productVariant.createMany({
        data: [
            {
                name: '20см',
                price: 499,
                size: 20,
                sizeType: 1,
                productId: 41
            },
            {
                name: '25см',
                price: 789,
                size: 25,
                sizeType: 2,
                productId: 41
            },
            {
                name: '30см',
                price: 1099,
                size: 30,
                sizeType: 3,
                productId: 41
            },
            {
                name: '35см',
                price: 1289,
                size: 35,
                sizeType: 4,
                productId: 41
            },
            {
                name: '20см',
                price: 349,
                size: 20,
                sizeType: 1,
                productId: 42
            },
            {
                name: '25см',
                price: 469,
                size: 25,
                sizeType: 2,
                productId: 42
            },
            {
                name: '30см',
                price: 729,
                size: 30,
                sizeType: 3,
                productId: 42
            },
            {
                name: '35см',
                price: 899,
                size: 35,
                sizeType: 4,
                productId: 42
            },
            {
                name: '20см',
                price: 259,
                size: 20,
                sizeType: 1,
                productId: 43
            },
            {
                name: '25см',
                price: 349,
                size: 25,
                sizeType: 2,
                productId: 43
            },
            {
                name: '30см',
                price: 579,
                size: 30,
                sizeType: 3,
                productId: 43
            },
            {
                name: '35см',
                price: 719,
                size: 35,
                sizeType: 4,
                productId: 43
            },
            {
                name: '20см',
                price: 469,
                size: 20,
                sizeType: 1,
                productId: 44
            },
            {
                name: '25см',
                price: 709,
                size: 25,
                sizeType: 2,
                productId: 44
            },
            {
                name: '30см',
                price: 1079,
                size: 30,
                sizeType: 3,
                productId: 44
            },
            {
                name: '35см',
                price: 1199,
                size: 35,
                sizeType: 4,
                productId: 44
            },
            {
                name: '0,3',
                price: 149,
                size: 0.3,
                sizeType: 1,
                productId: 45
            },
            {
                name: '0,5',
                price: 249,
                size: 0.5,
                sizeType: 2,
                productId: 45
            },
            {
                name: '0,3',
                price: 235,
                size: 0.3,
                sizeType: 1,
                productId: 46
            },
            {
                name: '0,5',
                price: 409,
                size: 0.5,
                sizeType: 2,
                productId: 46
            },
            {
                name: 'x1',
                price: 375,
                size: 1,
                sizeType: 1,
                productId: 47
            },
            {
                name: 'x1',
                price: 199,
                size: 1,
                sizeType: 1,
                productId: 48
            },
            {
                name: 'x1',
                price: 159,
                size: 1,
                sizeType: 1,
                productId: 49
            },
            {
                name: 'x1',
                price: 159,
                size: 1,
                sizeType: 1,
                productId: 50
            },
        ]
    })
    
    await prisma.ingredient.createMany({
        data: [
            {
                name: 'Сырный бортик',
                price: 179,
                imageUrl:
                    'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
            },
            {
                name: 'Сливочная моцарелла',
                price: 79,
                imageUrl:
                    'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png',
            },
            {
                name: 'Сыры чеддер и пармезан',
                price: 79,
                imageUrl:
                    'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
            },
            {
                name: 'Острый перец халапеньо',
                price: 59,
                imageUrl:
                    'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png',
            },
            {
                name: 'Нежный цыпленок',
                price: 79,
                imageUrl:
                    'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A',
            },
            {
                name: 'Шампиньоны',
                price: 59,
                imageUrl:
                    'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324',
            },
            {
                name: 'Бекон',
                price: 79,
                imageUrl:
                    'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA637AAB68F',
            },
            {
                name: 'Ветчина',
                price: 79,
                imageUrl:
                    'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61',
            },
            {
                name: 'Пикантная пепперони',
                price: 79,
                imageUrl:
                    'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3',
            },
            {
                name: 'Острая чоризо',
                price: 79,
                imageUrl:
                    'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027',
            },
            {
                name: 'Маринованные огурчики',
                price: 59,
                imageUrl:
                    'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B',
            },
            {
                name: 'Свежие томаты',
                price: 59,
                imageUrl:
                    'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67',
            },
            {
                name: 'Красный лук',
                price: 59,
                imageUrl:
                    'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C',
            },
            {
                name: 'Сочные ананасы',
                price: 59,
                imageUrl:
                    'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0',
            },
            {
                name: 'Итальянские травы',
                price: 39,
                imageUrl:
                    'https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png',
            },
            {
                name: 'Сладкий перец',
                price: 59,
                imageUrl:
                    'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B',
            },
            {
                name: 'Кубики брынзы',
                price: 79,
                imageUrl:
                    'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349',
            },
            {
                name: 'Митболы',
                price: 79,
                imageUrl:
                    'https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png',
            },
        ],
    });
}

async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
}

async function main() {
    try {
        await down()
        await up()
    } catch (e) {
        console.error(e)
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect();
        process.exit(1);
    })
