import ToggleButton from "./ToggleButton";

export default function ToggleButtons() {
    return(
        <div style={{display: "flex", gap: "15px"}}>
            <ToggleButton/>
            <ToggleButton onText="True" offText="False"/>
        </div>
    );
};