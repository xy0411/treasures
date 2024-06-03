import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electronApi',{
  'versions': {
    node: process.versions.node,
    chrome: process.versions.chrome,
    electron: process.versions.electron,
    ping: () => ipcRenderer.invoke('ping')
    // we can also expose variables, not just functions
  },
  setTitle: (title: string) => ipcRenderer.send('set-title', title),
  openFile: () => ipcRenderer.invoke('dialog:openFile')
})

contextBridge.exposeInMainWorld('darkMode', {
  toggle: ()=> ipcRenderer.invoke('dark-mode:toggle'),
  system: ()=> ipcRenderer.invoke('dark-mode:system')
})

contextBridge.exposeInMainWorld('electron', {
  startDrag: (fileName: any) => ipcRenderer.send('ondragstart', fileName)
})