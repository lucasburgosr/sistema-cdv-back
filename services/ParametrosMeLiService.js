const parametrosMeLiRepository = require('../repositories/ParametrosMeLiRepository');

class ParametrosMeLiService {
    async createParametrosMeLi(data) {
        console.log(data)
        return await parametrosMeLiRepository.create(data);
    }

    async getParametrosMeLiById(id) {
        return await parametrosMeLiRepository.findById(id);
    }

    async updateParametrosMeLi(id, data) {
        console.log(data)
        return await parametrosMeLiRepository.update(id, data);
    }

    async deleteParametrosMeLi(id) {
        return await parametrosMeLiRepository.delete(id);
    }

    async getAllParametrosMeLi() {
        return await parametrosMeLiRepository.findAll();
    }
}

module.exports = new ParametrosMeLiService();
