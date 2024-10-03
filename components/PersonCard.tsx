import React from "react";
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const PersonCard = ({ showDetails = true }) => {
    return (
        <div className={`flex flex-row ${showDetails ? 'justify-right' : 'justify-center'} items-center my-auto py-3 px-2 rounded-lg max-h-32 min-h-32`}>
            <div>
            <Avatar className=" min-w-16 min-h-16 max-w-20 max-h-20 justify-center">
                <AvatarImage src="/Rushil_Jayant_Animoji.png" alt="Rushil Jayant Image"/>
            </Avatar>
            </div>
            {showDetails && (
            <div className="flex flex-col p-2 transition-all">
                <h1 className="text-xl font-bold">Rushil Jayant</h1>
                <div className="text-xs ">Computer Science Honors @ TAMU</div>
            </div>
            )}
        </div>
    );
};

export default PersonCard;