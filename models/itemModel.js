let items = [
    {
        id: 1,
        name: 'Handmade Wooden Chair',
        description: 'A sturdy and stylish wooden chair for your home.',
        details: 'Crafting a wooden chair is a rewarding DIY project that combines practicality with creativity. This guide takes you through the process of building a durable and stylish chair from scratch. You will learn how to select the right type of wood based on durability and appearance, measure and cut pieces accurately, and assemble them securely.\n\nThe project emphasizes both functionality and aesthetics. From sanding the wood to applying a smooth varnish, every step is explained in detail to ensure a professional finish. Whether you’re furnishing your home or looking for a meaningful gift, this handmade wooden chair will stand out as a masterpiece.'
    },
    {
        id: 2,
        name: 'Custom Bookshelf',
        description: 'Build a bookshelf that fits your space and style.',
        details: 'A custom bookshelf is a versatile addition to any home, providing both storage and style. This guide walks you through designing a bookshelf tailored to your specific needs, whether it’s for a small apartment or a spacious library. You will start by sketching the design, selecting the wood, and cutting the panels.\n\nAssembly instructions focus on creating a sturdy structure that will last for years. Once the basic structure is complete, you can personalize your bookshelf with paint, varnish, or unique decorative touches. By following these steps, you’ll have a functional piece of furniture that reflects your personal style.'
    },
    {
        id: 3,
        name: 'DIY Birdhouse',
        description: 'Create a cozy birdhouse for your garden.',
        details: 'Building a birdhouse is a delightful project for nature enthusiasts and families alike. This guide provides easy-to-follow instructions for creating a safe and inviting home for birds. Begin by selecting weather-resistant wood, such as cedar, and cutting the pieces to size. The step-by-step assembly process ensures a sturdy construction that can withstand outdoor conditions.\n\nOnce the birdhouse is built, you can paint or decorate it to blend with your garden or stand out as a charming centerpiece. Watching birds make a home in your creation will bring joy and a deeper connection to nature, making this project truly rewarding.'
    },
    {
        id: 4,
        name: 'Rustic Coffee Table',
        description: 'A simple yet elegant rustic coffee table.',
        details: 'A rustic coffee table is the perfect centerpiece for a cozy living room. This project focuses on using reclaimed or natural wood to create a table with character and charm. You’ll learn how to prepare the wood, sand it for a smooth finish, and assemble the pieces to form a solid structure.\n\nThe final steps include staining or painting the wood to achieve the desired rustic effect, and sealing it to protect against wear and tear. This guide ensures that your coffee table will not only be functional but also a conversation starter for your guests.'
    },
    {
        id: 5,
        name: 'Floating Wall Shelves',
        description: 'Stylish floating shelves to organize your space.',
        details: 'Floating wall shelves are a modern and practical solution for organizing and decorating your home. This guide covers everything from selecting the right materials to securely mounting the shelves on your walls. With precise measurements and the proper tools, you’ll achieve a sleek, minimalist look without visible brackets or supports.\n\nThese shelves are versatile, perfect for displaying books, plants, or decorative items. By the end of this project, you’ll have stylish and functional shelves that make the most of your wall space while enhancing the overall aesthetic of your room.'
    },
    {
        id: 6,
        name: 'Outdoor Planter Box',
        description: 'Build a wooden planter box for your garden.',
        details: 'An outdoor planter box is a must-have for gardening enthusiasts. This guide teaches you how to build a robust and attractive planter box from treated wood, ensuring it can withstand outdoor conditions. The instructions include cutting the wood, assembling the box, and treating it with a waterproof sealant for longevity.\n\nOnce complete, the planter box can be used for growing flowers, vegetables, or herbs. You can also customize it with paint or decorative features to match your garden’s style. This project is not only functional but also a creative way to enhance your outdoor space.'
    }
];

module.exports = {
    getAllItems: () => items,
    getItemById: (id) => items.find(item => item.id === parseInt(id)),
    addItem: (name, description, details) => {
        const newItem = {
            id: items.length + 1,
            name,
            description,
            details
        };
        items.push(newItem);
        return newItem;
    }
};
