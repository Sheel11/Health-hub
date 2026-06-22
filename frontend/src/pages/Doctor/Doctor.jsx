import { Search } from 'lucide-react'
import React from 'react'

const posts = [
    {
        "fungal_infection": [{
            img: "./src/assets/data/doc1.png",
            name: "Toral D. Patel, MD",
            category:"Dermatology",
            speciality: "Dermatology + Aesthetics"
        },
        {
            img: "./src/assets/data/doc2.jpg",
            name: "Priya Sharma, MD",
            category: "Dermatology",
            speciality: "Dermatology + Pediatric Dermatology"
        },
        {
            img: "./src/assets/data/doc3.webp",
            name: "Vikram Sharma, MD",
            category: "Dermatology",
            speciality: "Dermatology + Dermatopathology"
        }
    ]
    }
];

const Doctor = () => {
    return (
        <div className="max-w-7xl mx-auto py-12 px-4 md:mb-30">
            <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-green-800">
                    Find the Perfect Doctor for You!
                </h1>
            </div>
            <div className="grid gap-7 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                {posts[0]["fungal_infection"].map((doctor, doctorIndex) => (
                    <div key={doctorIndex} className="border rounded-md overflow-hidden shadow-md">
                        <img src={doctor.img} className="w-full h-40 object-cover" alt="" />
                        <div className="p-4">
                            <p className="text-sm font-semibold text-gray-700"># {doctor.category}</p>
                            <h2 className="mt-2 text-lg font-semibold text-gray-900">{doctor.name}</h2>
                            <p className="mt-2 text-sm text-gray-600">{doctor.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* Pagination can be added here if needed */}
        </div>
    )
}

export default Doctor;
