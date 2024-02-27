'use client';
import { useState, useMemo } from "react";

import axios from "axios";
import Image from "next/image";
interface DataItem {
    md5?: boolean,
    base64?: boolean,
    caser?: boolean,
    rot13?: boolean
}
const Core = () => {
    const [show, setShow] = useState<boolean>(false);
    const [encrypt, setEncrypt] = useState<string>('');
    const [decrypt, setDecrypt] = useState<string>('');
    const [ans, setAns] = useState({});


    const data: DataItem[] = [
        {
            md5: false
        }, {
            base64: false
        }, {
            caser: false
        }, {
            rot13: false
        },
    ]
    const [array, setArray] = useState(data);

    const memo = useMemo(() => {
        const activeAlgorithm = array.find(item => Object.values(item)[0] === true);
        return activeAlgorithm ? Object.keys(activeAlgorithm)[0] : '';
    }, [array]);
    const hashmd5 = async (text: string) => {
        try {
            const res = await axios.post('http://localhost:6969/algo/md5', {
                text: text
            })
            if (res) {
                console.log(res.data);
                return res.data;

            }
        }
        catch (err) {
            console.error(err);
            return;

        }
    }

    const base64 = async (text: string, op: string) => {
        let plaintext : string = '';
        let hashed : string = '';

        if(op === 'up'){
            plaintext = text;
            hashed = '';
        }
        else if(op === 'down'){
            plaintext = '',
            hashed = text;
        }
        try {
            const res = await axios.post('http://localhost:6969/algo/base64', {
                plaintext: plaintext,
                hashed: hashed,
                operation: op
            })
            if (res) {
                console.log(res.data);
                return res.data;
            }

        }
        catch (err) {
            console.error(err);
            return;

        }
    }
    const rot13 = async (text: string, op: string) => {
        let plaintext : string = '';
        let hashed : string = '';

        if(op === 'up'){
            plaintext = text;
            hashed = '';
        }
        else if(op === 'down'){
            plaintext = '',
            hashed = text;
        }
        try {
            const res = await axios.post('http://localhost:6969/algo/rot13', {
                plaintext: plaintext,
                hashed: hashed,
                operation: op
            })
            if (res) {
                console.log(res.data);
                return res.data;
            }

        }
        catch (err) {
            console.error(err);
            return;

        }
    }
    const caser = async (text: string, op: string) => {
        let plaintext : string = '';
        let hashed : string = '';

        if(op === 'up'){
            plaintext = text;
            hashed = '';
        }
        else if(op === 'down'){
            plaintext = '',
            hashed = text;
        }
        try {

            const res = await axios.post('http://localhost:6969/algo/caeser', {
                plaintext: plaintext,
                hashed: hashed,
                operation: op
            })
            if (res) {
                console.log(res.data);
                return res.data;

            }


        }
        catch (err) {
            console.error(err);
            return;

        }
    }

    const handleClick = async (e: any) => {
        const currAlgo = memo;
        if (currAlgo === 'md5') {
            const ans = await hashmd5(encrypt);
            setAns(ans);

        }
        else if (currAlgo === 'base64') {
            const op = e.target.name;
            if (op === 'up') {
                const ans = await base64(encrypt, op);
                setAns(ans);

            }
            else {
                const ans = await base64(decrypt, op);
                setAns(ans);
            }

        }
        else if (currAlgo === 'rot13') {
            const op = e.target.name;
            if (op === 'up') {
                const ans = await rot13(encrypt, op);
                setAns(ans);
            }
            else {
                const ans = await rot13(decrypt, op);
                setAns(ans);
            }

        }
        else if (currAlgo === 'caser') {
            const op = e.target.name;
            if (op === 'up') {
                const ans = await caser(encrypt, op);
                setAns(ans);
            }
            else {
                const ans = await caser(decrypt, op);
                setAns(ans);
            }

        }

    }

    const toggleClick = (index: Number) => {
        const updatedArray = array.map((item, i) => {
            if (i === index) {
                // Toggle the value of the clicked key
                return { ...item, [Object.keys(item)[0]]: !Object.values(item)[0] };
            } else {
                // Set other keys to false
                return { [Object.keys(item)[0]]: false };
            }
        });
        setArray(updatedArray);
    }





    return (
        <>
            <div
                className="w-full flex bg-gray-800 p-4">
                <img
                    src={show ? 'close.svg' : 'menu.svg'}
                    className="cursor-pointer"
                    alt="menu"
                    onClick={() => setShow(!show)}
                />
            </div>
            <div className="flex">


                {show && (
                    <div className="">
                        <div className="h-full flex-col p-4 bg-gray-700 w-max text-white">
                            {
                                array.map((item, index) => (
                                    <div key={index}>
                                        <button type="button"
                                            className={`m-2 w-40 border-2 border-white border-double p-4 rounded  hover:bg-gray-200 hover:text-black ${Object.values(item)[0] ? 'bg-red-500' : ''} `}
                                            onClick={() => toggleClick(index)}

                                        >
                                            {
                                                Object.keys(item)[0]
                                            }
                                        </button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )}

                <div className="flex  flex-col justify-center items-center border-2 border-black border-solid h-screen w-screen">
                    <div className="flex">
                        <div className="flex flex-col ">
                            <input type="text" name="some" value={encrypt} id="some" placeholder="encrypt" className="bg-gray-100 outline-none placeholder-gray-500 px-4 py-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 m-2 text-lg "
                                onChange={(e) => setEncrypt(e.target.value)}
                            />
                            <button className="text-white bg-gray-800 border-none rounded py-2 px-2"
                                onClick={(e) => handleClick(e)}
                                name="up"
                            >ENCRYPT</button>
                        </div>

                        <Image src={'/back-and-forth.png'} width={80} height={80} alt="arrow" className="m-4 cursor-pointer" />
                        <div className="flex flex-col">
                            <input type="text" name="some" id="some" placeholder="decrypt" value={decrypt} className={`bg-gray-100 outline-none placeholder-gray-500 px-4 py-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 m-2 text-lg `}
                                disabled={array[0].md5}
                                onChange={(e) => setDecrypt(e.target.value)}
                            />
                            <button className={`text-white bg-gray-800 border-none rounded py-2 px-2 ${array[0].md5 ? 'cursor-not-allowed' : 'cursor-pointer'} `}
                                disabled={array[0].md5}
                                name="down"
                                onClick={(e) => handleClick(e)}
                            >DECRYPT</button>


                        </div>
                    </div>
                    <div>
                        <div>

                            {ans && typeof ans === 'object' && Object.keys(ans).length > 0 && Object.entries(ans).map(([key, value]) => (
                                <div key={key}>
                                    <strong>{key}: </strong>
                                    {typeof value === 'object' ? JSON.stringify(value) : value}
                                </div>
                            ))}

                        </div>
                    </div>


                </div>
            </div>


        </>

    )
}

export default Core;