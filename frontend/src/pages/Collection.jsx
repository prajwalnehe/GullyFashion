import React from 'react';
import { Link } from 'react-router-dom';

const Collection = () => {
  const categories = [
    {
      id: 1,
      name: "SHIRTS",
      image: 'https://res.cloudinary.com/dvkxgrcbv/image/upload/v1765270065/f41cb7e3-f91a-4dc1-8738-35f610929e62.png',
      path: '/category/formal-shirts'
    },
    {
      id: 2,
      name: "TSHIRTS",
      image: 'https://res.cloudinary.com/dvkxgrcbv/image/upload/v1765270201/2bc21bba-d836-46f0-81a0-6e045d2b07fd.png',
      path: '/category/tshirts'
    },
    {
      id: 3,
      name: 'PERFUMES',
      image: 'https://res.cloudinary.com/dvkxgrcbv/image/upload/v1765270303/8ebb88f6-a40e-48a5-a1f3-6b98f254c666.png',
      path: '/category/perfumes'
    },
    {
      id: 4,
      name: 'Shoes',
      image: 'https://res.cloudinary.com/dvkxgrcbv/image/upload/v1765356722/c8ebeacb5152e0d91ea0158bc3d94f8b_uaalsc.jpg',
      path: '/category/shoes'
    },
    {
      id: 5,
      name: 'PANTS',
      image: 'https://res.cloudinary.com/dvkxgrcbv/image/upload/v1765270378/ce7c75f8-2069-4b99-be54-f0fbefda46f3.png',
      path: '/category/pants'
    },
    {
      id: 6,
      name: 'Sunglasses',
      image: 'https://res.cloudinary.com/dvkxgrcbv/image/upload/v1765461889/43753e06bc6de0fcff2745b62424bace_jzwtyc.jpg',
      path: '/category/sunglasses'
    },
    {
      id: 7,
      name: 'WATCHES',
      image: 'https://res.cloudinary.com/dvkxgrcbv/image/upload/v1765270630/e84cc747-7a2e-4a65-ad85-0750fc16b74c.png',
      path: '/category/watches'
    },
    {
      id: 8,
      name: 'SHORTS & BOXERS',
      image: 'https://res.cloudinary.com/dvkxgrcbv/image/upload/v1765270714/557c7404-59a5-46d4-84a9-5fa505f2e7dc.png',
      path: '/category/shorts'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Collection
          </h1>
          <p className="text-base md:text-lg text-gray-600">
            Explore our wide range of products
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 sm:gap-y-12">
          {categories.map((category) => (
            <div key={category.id} className="group flex flex-col items-center text-center">
              <Link 
                to={category.path}
                className="block w-full"
              >
                {/* Image Container */}
                <div className="aspect-square bg-gray-100 overflow-hidden rounded-lg mb-4 transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/300x300?text=Category';
                    }}
                  />
                </div>
              </Link>
              
              {/* Category Name */}
              <div>
                <p className="text-sm font-medium tracking-wide uppercase text-gray-800 group-hover:text-black transition-colors">
                  {category.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
