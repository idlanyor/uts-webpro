import React from 'react'
interface PengalamanProps {
    date: string;
    sectionTitle: string;
    title?: string;
    description?: string;
    link?: string;

}
const Pengalaman: React.FC<PengalamanProps> = ({
    date,
    sectionTitle,
    title,
    description,
    link
}) => {
    return (
        <>
            {title &&
                <>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white px-6 text-center">{title}</h3>
                    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-500"></hr>
                </>
            }
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{date}</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{sectionTitle}</h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{description}</p>
                    {link &&
                        <a href={link} className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Detail <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg></a>
                    }
                </li>
            </ol>
        </>
    )
}
export default Pengalaman