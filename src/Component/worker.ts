self.onmessage = async (
  e: MessageEvent<{
    type: string
  } & {
    [key: string]: any
  }>
) => {
  switch (e.data.type) {
    case 'init': {
      break;
    }
  }
}