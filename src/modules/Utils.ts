import UserPayload from "./types/custom-types.js";



let users : UserPayload [] =
[
    { 
        email:      "maylin.smith@gmail.com",
        password:   "08462314",
        name:       "Maylin",
        surname:    "Smith",
        age:        39,
        photo :     "./../images/example-profile-photo-1.jpg"
    },
    { 
        email:      "lisa.reinols@gmail.com",
        password:   "061342",
        name:       "Lisa",
        surname:    "Reinols",
        age:        40,
        photo:      "./../images/example-profile-photo-2.jpg"
    },
    { 
        email:      "tommy.sil@outlook.com",
        password:   "2645575",
        name:       "Tommy",
        surname:    "Sil",
        age:        28,
        photo :     "./../images/example-profile-photo-3.jpg"
    },
    { 
        email:      "mario.reina@gmail.com",
        password:   "875867",
        name:       "Mario",
        surname:    "Reina",
        age:        40,
        photo :     "./../images/example-profile-photo-4.jpg",
    },
]

export default class Utils{

    public static jsonToMap(data: string): Map<string, any> {
        var jsonText = JSON.stringify(data) //// data: { email: email, password: password }
        //let map : Map<string, string> = Utils.jsonToMap(jsonText);
        //const accountLoginJson : string = map.get('data') as string;
        const obj: string = JSON.parse(jsonText);
        let map: Map<string, any> = new Map(Object.entries(obj.valueOf()));
        // map.get('data')  ===>> {"email":"marcckku@gmail.com","password":"fdsadfawrf43fwfa"}
        return map;
    }

    public static buildUsers() : UserPayload [] {
        return users;
    }

}