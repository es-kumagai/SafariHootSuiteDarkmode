//
//  SafariExtensionViewController.swift
//  HootSuiteDarkmode Extension
//
//  Created by Tomohiro Kumagai on 2019/05/30.
//  Copyright © 2019 Tomohiro Kumagai. All rights reserved.
//

import SafariServices

class SafariExtensionViewController: SFSafariExtensionViewController {
    
    static let shared: SafariExtensionViewController = {
        let shared = SafariExtensionViewController()
        shared.preferredContentSize = NSSize(width:320, height:240)
        return shared
    }()

}
