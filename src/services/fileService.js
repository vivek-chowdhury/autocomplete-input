const fileList = {
    files: [
        {
            uid: "fld001",
            icon: "",
            name: "Root",
            type: "folder",
            parent_uid: null,
            children: [
                {
                    uid: "fld002",
                    icon: "",
                    name: "public",
                    type: "folder",
                    parent_uid: null,
                    children:[
                        {
                            uid: "file004",
                            icon: "",
                            name: "index.html",
                            type: "file",
                            parent_uid: null,
                            children:[]
                        }
                    ]
                },
                {
                    uid: "fld003",
                    icon: "",
                    name: "src",
                    type: "folder",
                    parent_uid: null,
                    children:[
                        {
                            uid: "file002",
                            icon: "",
                            name: "App.js",
                            type: "file",
                            parent_uid: null,
                            children:[]
                        },
                        {
                            uid: "file003",
                            icon: "",
                            name: "App.css",
                            type: "file",
                            parent_uid: null,
                            children:[]
                        }
                    ]
                },
                {
                    uid: "file001",
                    icon: "",
                    name: "package.json",
                    type: "file",
                    parent_uid: null,
                    children:[]
                }
            ]
        }
    ]
}

export default fileList;