import React from "react";

import Card, {CardVariant} from "./components/Card";
import UserList from "./components/UserList";
import {IUser} from "./types/types";

function App() {
    const users: IUser[] = [
        {
            "id": 1, "name": "Leanne Graham", "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
            }
        },
        {
            "id": 2, "name": "Antony Tompkins", "email": "asdfff@april.biz",
            "address": {
                "street": "Ferrr Grut",
                "city": "Totenkolf",
                "zipcode": "47282-7788",
            }
        },
    ]

    return (
        <div>
            <h1>Hello!</h1>
            <Card onClick={(num) => console.log("Click", num)} width="200px" height="200px"
                  variant={CardVariant.outlined}>
                <button>Button</button>
            </Card>
            <UserList users={users}/>
        </div>
    );
}

export default App;
