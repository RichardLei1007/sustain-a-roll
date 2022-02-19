import "./Footer.css";
import { useState } from "react";

function Footer(props) {
    // Footer components
    return (
        <footer className = "footer">
            <button className = "weekly" />
            <button className = "home" />
            <button className = "setting" />
        </footer>
    );
}

export default Footer;