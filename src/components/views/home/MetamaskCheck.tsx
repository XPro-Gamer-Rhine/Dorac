import React from 'react'
import InstallMetmask from './InstallMetmask'
import InstalledMetaMask from './InstalledMetaMask'
export default function MetaMaskCheck() {

    if (window.ethereum) {
        return<InstalledMetaMask/>
    }else{
        return<InstallMetmask/>
    }

}
