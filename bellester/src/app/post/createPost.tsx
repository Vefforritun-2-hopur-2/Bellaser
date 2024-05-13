import React from "react";
import { getDatabase, ref, set } from "firebase/database";
import {Header, Footer } from '../../components';


function writeUserPost(userId: string, dogName: string, aldur: number, stad: string, date: number, kr: number) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
        dogName: dogName,
        aldur: aldur,
        stad: stad,
        date: date,
        kr: kr,
    });
}


export default function Layout({ children}: {children: React.ReactNode}){
    return (
        <html>
            <body>
                <Header />
                <main>
                    {children}
                </main>

                <Footer />
            </body>
        </html>
    )
}

