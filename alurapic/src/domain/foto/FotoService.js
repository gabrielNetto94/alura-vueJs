export default class FotoService {

    constructor(resource) {
        this._resource = resource('v1/fotos{/id}')
    }

    listar() {
        return this._resource
            .query()
            .then(res => res.json(), err => {
                console.log(err);
                throw new Error('Não foi possivel obter as fotos');
            });
    }

    cadastrar(foto) {
        //se tiver _id é alteração
        if (foto._id) {
            console.log('ALTERAR')
            return this._resource.update({ id: foto._id }, foto);
        } else {
            console.log("CADASTRAR")
            return this._resource.save(foto);
        }

    }

    deletar(id) {
        return this._resource.delete({ id }).then(null, err => {
            console.log(err);
            throw new Error('Não foi possível deletar a foto');
        });
    }
    buscar(id) {
        return this._resource.get({ id }).then(res => res.json());
    }
}