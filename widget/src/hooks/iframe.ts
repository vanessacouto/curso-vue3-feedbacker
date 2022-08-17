import { setApiKey, setCurrentPage, setFingerprint } from '../store'

interface IframeControl {
  updateCoreValuesOnStore(): void
  notifyOpen(): void
  notifyClose(): void
}

export default function useIframeControl (): IframeControl {
  function updateCoreValuesOnStore (): void {
    if (process.env.NODE_ENV === 'production') {
      const query = new URLSearchParams(window.location.search)
      const apiKey = query.get('api_key') ?? ''
      const page = query.get('page') ?? ''
      const fingerprint = query.get('fingerprint') ?? ''

      setCurrentPage(page)
      setApiKey(apiKey)
      setFingerprint(fingerprint)
      return
    }

    setCurrentPage('https://playground-url.com')
    setApiKey('6686b418-cb3f-4ccc-ae80-7716008a38fd')
    setFingerprint('123456')
  }

  function notifyOpen (): void {
    window.parent.postMessage(
      {
        isWidget: true,
        isOpen: true
      },
      '*'
    )
  }

  function notifyClose (): void {
    window.parent.postMessage(
      {
        isWidget: true,
        isOpen: false
      },
      '*'
    )
  }

  return {
    updateCoreValuesOnStore,
    notifyOpen,
    notifyClose
  }
}
