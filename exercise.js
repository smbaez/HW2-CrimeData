var exercise = {};

exercise.countRecords = function(data){
    return data.length;
};

exercise.countDistrictCrimes = function(data,district){
    counter = 0
    function countDistrict(entry){
        if (entry[19]===district){
            counter = counter +1
        }
    }
    data.forEach(countDistrict)
    return counter;
};

exercise.countPrimaryType = function(data,primaryType){
    counter = 0
    function countType(entry){
        if (entry[13]===primaryType){
            counter = counter +1
        }
    }
    data.forEach(countType)
    return counter;
};

exercise.countLocation = function(data,location){
    counter = 0
    function countLocation(entry){
        if (entry[15]===location){
            counter = counter + 1
        }
    }
    data.forEach(countLocation)
    return counter;
};


exercise.buildLatLngPoint = function(crime){
    var point = {};
    point.latitude = crime[26];
    point.longitude = crime[28];
    return point;  
};




