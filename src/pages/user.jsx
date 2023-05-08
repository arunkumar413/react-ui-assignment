import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export function UserPage() {

    return (
        <div>
            <h2> Welcome to user page</h2>
            
            <Link to="/role">Role</Link>
        </div>
    )
}