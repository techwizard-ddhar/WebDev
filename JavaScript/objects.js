function ObjectMethod(obj){

    console.log("Original object : ", obj);

    console.log("After Object.keys() : " , Object.keys(obj));

    console.log("After Object.values() : ",  Object.values(obj));

    console.log("After Object.entries : ", Object.entries(obj));

    console.log("After Object.assign() : ", Object.assign({}, obj, {
        newproperty: "newValue"
    }))
}


const SampleObjects = {

    key1: "value1",
    key2: "value2",
    key3: "value3"
};

ObjectMethod(SampleObjects);