import { X } from "lucide-react"
import { useEffect } from "react";
import { useState } from "react";

export function StarBackground(){
    // a start will have following properties
        // id, size, x, y, opacity, animationDuration

    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(()=>{
        generateStars();
        generateMeteors();

        const handleReSize = () =>{
            generateStars();
        }

        window.addEventListener('resize', handleReSize);
        return () => window.removeEventListener("resize", handleReSize);
    },[]) 

    const generateStars = () =>{
        let countOfStars =Math.floor( // round it up
            window.innerHeight * window.innerWidth // returns the no of pixels in a screen
         / 7000);
        let newStars = []

        for(let i=0; i<countOfStars; i++){
            newStars.push({
                id:i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 +0.5,
                animationDuration: Math.random() * 4 + 2
            })
        }
        setStars(newStars);
    }

     const generateMeteors = () =>{
        let countOfMeteors =6;
        let newMeteors = []

        for(let i=0; i<countOfMeteors; i++){
            newMeteors.push({
                id:i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                animationDelay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3
            });
        }
        setMeteors(newMeteors);
    }
        
    return(
        // if used () = implicit return in arrow function
        // if used {} = explicit return in arrow function and explicit return statements is needed here. 
                        // use this when doing extra work before
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star) => (
            <div key={star.id} className="star animate-pulse-subtle" style={{width:star.size +"px", height: star.size +"px", left:star.x +"%", top:star.y +"%", opacity:star.opacity +"px", animationDuration:star.animationDuration +"s"}}/>
        ))}
         {meteors.map((meteor) => (
            <div key={meteor.id} className="meteor animate-meteor" style={{width:meteor.size * 50 +"px", height: meteor.size * 2 +"px", left:meteor.x +"%", top:meteor.y +"%", animationDelay:meteor.animationDelay +"px", animationDuration:meteor.animationDuration +"s"}}/>
        ))}
    </div>
    );
}