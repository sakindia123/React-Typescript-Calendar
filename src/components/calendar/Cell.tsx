import clsx from 'clsx'
import React from 'react'

interface Props extends React.PropsWithChildren {
    className?: string;
    highlight?: boolean;
}

const Cell: React.FC<Props> = ({ className, children, highlight = false }) => {
    return (
        <div className={clsx("h-12 flex items-center justify-center",
            { "bg-black text-white": highlight },
            className)}>{children}</div>
    )
}

export default Cell