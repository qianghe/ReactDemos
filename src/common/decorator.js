export function log(bgColor = 'green') {
    return function(target, name, descriptor) {
        const oldValue = descriptor.value;
        const componentName = target.constructor.name || 'UNKONW';
    
        descriptor.value = function() {
            console.log(
                `%c [${componentName}] %c ${name}`,
                'background: yellow; color: #000; font-weight: bold',
                `background-color: ${bgColor}; color: #fff`, 
            );
          return oldValue.apply(this, arguments);
        };
      
        return descriptor;
      }
}

  