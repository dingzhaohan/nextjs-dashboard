
'use client';
import { Button } from "@/components/ui/button"
import React, { useState } from "react"
import {Input} from "@nextui-org/react";
import axios from 'axios';
import { lusitana } from '@/app/ui/fonts';
import CardWrapper from '@/app/ui/dashboard/cards';

export default function Page() {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
      };

    const handleUpload = async () => {
        try {
          const formData = new FormData();
          
          if(file) {
            formData.append('file', file);
          }
          formData.append('table_name', 'dingzhaohan_1')
          console.log(formData)
          const r1 = await axios.get('http://localhost:8000/health');
          console.log(r1.data);
          // const response = await axios.post('http://localhost:8000/insert_single_excel_to_table', formData, {
          //   headers: {
          //     'Content-Type': 'multipart/form-data',
          //   },
          //   params: {
          //     table_id: 1
          //   }
          // });
          const response = await axios.post('http://localhost:8000/create_table_from_excel', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            
          });
          console.log(response.data);

        } catch (error) {
          console.error('Error uploading file:', error);
        }
      };
    
    const downloadFile = async () => {
        try {
          const formData = new FormData();
          
          const response = await axios.get('http://localhost:8000/get_tables', {
            headers: {
              'Content-Type': 'application/json',
            },
           
          });
          console.log(response.data);

        } catch (error) {
          console.error('Error downloading file:', error);
        }
      }

   

    return (
        <div>
            <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
                <strong>Upload Excel File.</strong> Please choose .xlsx format
            </p>
          
          <Input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
          <Button onClick={handleUpload}>
            Upload
          </Button>

          <Button onClick={downloadFile}>
            Download
          </Button>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <CardWrapper />
          </div>
        </div>
      );
}


