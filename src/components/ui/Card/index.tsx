interface card{
    title : string,
    content : string
}

const Card = ({title , content} : card) => {
    return (
        <>
            
                <div className="card relative flex h-96 w-4/5 cursor-pointer flex-col justify-evenly overflow-hidden rounded-3xl bg-blue-200">
                    <div className="m-2">
                        <h2 className="text-[40px] text-gray-800">{title}</h2>
                    </div>
                    <div className="absolute bottom-0 left-0 m-2 w-full bg-slate-400 text-[25px] text-white opacity-0 transition-opacity duration-500 hover:opacity-100">
                        <p className="px-4 py-2">{content}</p>
                    </div>
                </div>
            
        </>
    )
}

export default Card;

