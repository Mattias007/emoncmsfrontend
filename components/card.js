"use client"
import { useFormStatus } from 'react-dom'
import { ManualControll, ManualOnOff } from "@/app/actions"


export default function AcCard(props) {
    const Manual = ManualControll.bind(null, props.name)
    const OnOff = ManualOnOff.bind(null, props.name)

    const { pending } = useFormStatus()

    const overidebutton = () => {
        if (props.override == 1){
            return (
                <form action={OnOff} className="flex flex-col gap-2">
                <button className="p-2 bg-cyan-100" type="submit" aria-disabled={pending}>On/Off</button>
                </form>
            )
        }
    }

return(
    <div className="bg-cyan-300 p-5 rounded-xl">
        <h1>{props.name}</h1>
        <p>Temp: {props.temp}</p>
        <p>Hum: {props.hum}</p>
        <p>Temp Target: {props.targettemp}</p>
        <p>Mode: {props.command == 1 ? "On" : "Off"}</p>
        <p>Overide: {props.override == 1 ? "True" : "Fales"}</p>
        <div className='flex gap-2 flex-col'>
        <form className="flex flex-col gap-2">
            <input className="p-2" type="number" max="30" min="0" name="targettemp" defaultValue={props.targettemp}></input>
            <button className="p-2 bg-cyan-100" type="submit" aria-disabled={pending}>Update Target Temp</button>
        </form>

        

        <form action={Manual}  className="flex flex-col gap-2" aria-disabled={pending}>
            <button className="p-2 bg-cyan-100" type="submit"aria-disabled={pending}>Overide Mode</button>
        </form>

        {overidebutton()}
        </div>
    </div>
)
}