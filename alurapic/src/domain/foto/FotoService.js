export default class FotoService {

    constructor(resource) {
        this._resource = resource('v1/fotos{/id}')
    }

    listar() {
        return this._resource
            .query()
            .then(res => res.json());
    }

    cadastrar(foto) {
        //se tiver _id é alteração
        if (this._id) {
            return this._resource.update({ id: foto._id }, foto);
        } else {
            return this._resource.save(foto);
        }

    }

    deletar(id) {
        return this._resource.delete({ id });
    }
    buscar(id) {
        return this._resource.get({ id }).then(res => res.json());
    }
}