interface SetupPayload { // tipando as funcoes
    onProduction: () => void;
    onDevelopment: () => void;
}
export function setup ({ onProduction, onDevelopment }: SetupPayload) {
  if (process.env.NODE_ENV !== 'production') {
    onDevelopment()
    return
  }

  onProduction()
}
