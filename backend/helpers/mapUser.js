module.exports = function(user, reqData){
    if (reqData.username) {
        user.username = reqData.username
    }
    if (reqData.phone_number) {
        user.phone = reqData.phone_number
    }
    if (reqData.date_of_birth) {
        user.dob = reqData.date_of_birth
    }
    if (reqData.gender) {
        user.gender = reqData.gender
    }
    if (!user.address) {
        user.address = {}
    }
    if (reqData.temporary_address) {
        user.address.temporaryAddress = reqData.temporary_address
    }
    if (reqData.permanent_address) {
        user.address.permanentAddress = reqData.permanent_address
    }

    return user
}