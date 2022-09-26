import React from "react";
const response = {
    message: {
        "users": [
            {
              "username": "John Doe",
              "password": "password1"
            },
            {
              "username": "Jane Doe",
              "password": "password2"
            }
          ] 
    }
};


export default async function mockFetch(url) {
    
    if(url=== "http:localhost:3000/users") {
            return {
                ok: true,
                status: 200,
                json: () => response,
            };
        
    }
}