//import Vue from 'vue';
//Vue.directive('meu-transform', {

//exporta a diretiva como um componente
export default {
    bind(element, binding, vnode) {

        let current = 0;

        element.addEventListener('dblclick', function () {

            //pega o valor passado por parâmetro no binding,se não for passado nada pega 90
            let increment = binding.value || 90;
            let efeito;

            if (!binding.arg || binding.arg == 'rotate') {

                //se existir o modificador reverse faz a rotação ao contrário
                binding.modifiers.reverse ? current -= increment : current += increment;

                efeito = `rotate(${current}deg)`;

            } else if (binding.arg == 'scale') {
                efeito = `scale(${increment})`;
            }

            element.style.transform = efeito;
            if (binding.modifiers.animate) element.style.transition = 'transform 0.5s';
        });
    }

};