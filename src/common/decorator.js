export function log(bgColor = 'green', bgColorForComp = 'yellow') {
    return function(target, name, descriptor) {
        console.log('target', target);
        const oldValue = descriptor.value;
        const componentName = target.constructor.name || 'UNKONW';
    
        descriptor.value = function() {
            console.log(
                `%c [${componentName}] %c ${name}`,
                `background: ${bgColorForComp}; color: #000; font-weight: bold`,
                `background-color: ${bgColor}; color: #fff`, 
            );
          return oldValue.apply(this, arguments);
        };
      
        return descriptor;
      }
}

  