import React from 'react'

const ActivityTable = () => {
  return (
    
<div className="overflow-x-auto relative shadow-md px-10">
    <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-[#8900F2]">
            <tr>
                <th scope="col" className="py-10 px-6">
                    Prize Pot
                </th>
                <th scope="col" className="py-3 px-6">
                    Player
                </th>
                <th scope="col" className="py-3 px-6">
                    Round
                </th>
                <th scope="col" className="py-3 px-6">
                    Current Teams
                </th>
                {/* <th scope="col" className="py-3 px-6">
                    <span className="sr-only">Edit</span>
                </th> */}
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b  border-gray-700 hover:bg-gray-50 ">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                    Apple MacBook Pro 17
                </th>
                <td className="py-4 px-6">
                    Sliver
                </td>
                <td className="py-4 px-6">
                    Laptop
                </td>
                <td className="py-4 px-6">
                    $2999
                </td>
                {/* <td className="py-4 px-6 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td> */}
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                    Microsoft Surface Pro
                </th>
                <td className="py-4 px-6">
                    White
                </td>
                <td className="py-4 px-6">
                    Laptop PC
                </td>
                <td className="py-4 px-6">
                    $1999
                </td>
                {/* <td className="py-4 px-6 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td> */}
            </tr>
            <tr className="bg-white hover:bg-gray-50">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                    Magic Mouse 2
                </th>
                <td className="py-4 px-6">
                    Black
                </td>
                <td className="py-4 px-6">
                    Accessories
                </td>
                <td className="py-4 px-6">
                    $99
                </td>
                {/* <td className="py-4 px-6 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td> */}
            </tr>
        </tbody>
    </table>
</div>

  )
}

export default ActivityTable