import React from 'react'

interface SummaryCardProps {
    icon:React.ReactNode,
    title:string,
    figure:string
}

const SummaryCard:React.FC<SummaryCardProps> = ({icon,title,figure}) => {
  return (
        <div className="card shadow-md bg-pry text-sec">
                        <div className="card-body flex items-center">
                            {icon}
                            <div className="ml-4 text-center">
                                <p className="font-bold">{title}</p>
                                <h2 className="text-xl">{figure}</h2>
                            </div>
                        </div>
                    </div>
  )
}

export default SummaryCard