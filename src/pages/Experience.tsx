import React from "react"
import Pengalaman from "../Components/Pengalaman"
export default function Experience() {
  return (
    <div className="w-full mx-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-800">
      <div className="flex flex-col md:flex-row justify-around">
        <div className="mt-5 mx-4">
          <Pengalaman
            title="Education"
            date="2006"
            sectionTitle="TK Pertiwi 1 Sirandu"
            description="Kindergarten School"
          />
          <Pengalaman
            date="2007 - 2014"
            sectionTitle="SD Negeri 1 Sirandu"
            description="Elementary School"
          />
          <Pengalaman
            date="2015 - 2016"
            sectionTitle="SMP Negeri 4 Satap Karangjambu"
            description="Junior High School"
          />
          <Pengalaman
            date="2017 - 2020"
            sectionTitle="SMK Maarif Karangreja"
            description="Vocational High School"
          />
          <Pengalaman
            date="2022 - Present"
            sectionTitle="STMIK Widya Utama Purwokerto"
            description="College/University"
          />
        </div>
        <div className="mt-5 mx-4">
          <Pengalaman
            title="Work"
            date="2019 - 2020"
            sectionTitle="SMK Maarif Karangreja"
            description="Office Boy"
          />
          <Pengalaman
            date="March 2020 - Feb 2021"
            sectionTitle="SMK Maarif Karangreja"
            description="Computer Lab Assistant & Administration Staff"
          />
          <Pengalaman
            date="Feb 2021 - Sept 2021"
            sectionTitle="SMP N 1 Bobotsari"
            description="Administration Staff"
          />
          <Pengalaman
            date="Sept 2021 - March 2022"
            sectionTitle="Wisesa Copier & Cell Karangreja"
            description="Shopkeeper & Junior Cashier"
          />
          <Pengalaman
            date="March 2022 - Present"
            sectionTitle="Wisesa Copier & Cell Karangreja"
            description="Store emplooyes & Graphic designer"
          />
        </div>
        <div className="mt-5 mx-4">
          <Pengalaman
            title="Organization"
            date="2023"
            sectionTitle="SMP N 4 Satap Karangjambu"
            description="Chairman of the Student body"
          />
          <Pengalaman
            date="2017 - 2018"
            sectionTitle="SMK Maarif Karangreja"
            description="Chairman of the Student body"
          />
          <Pengalaman
            date="2018 - 2019"
            sectionTitle="SMK Maarif Karangreja"
            description="Secretary of School Scout Organization"
          />
          <Pengalaman
            date="2020 - 2023"
            sectionTitle="PAC IPNU Karangjambu"
            description="Vice Chairman"
          />
          <Pengalaman
            date="2022 - 2023"
            sectionTitle="Rohis Syamilah SWU"
            description="Member"
          />
        </div>
      </div>
    </div>
  )
}