//
//  ViewController.swift
//  HootSuiteDarkmode
//
//  Created by Tomohiro Kumagai on 2019/05/30.
//  Copyright © 2019 Tomohiro Kumagai. All rights reserved.
//

import Cocoa
import SafariServices.SFSafariApplication

class ViewController: NSViewController {

    @IBOutlet var appNameLabel: NSTextField!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.appNameLabel.stringValue = "HootSuiteDarkmode";
    }
    
    @IBAction func openSafariExtensionPreferences(_ sender: AnyObject?) {
        SFSafariApplication.showPreferencesForExtension(withIdentifier: "jp.ez-net.HootSuiteDarkmode-Extension") { error in
            if let _ = error {
                // Insert code to inform the user that something went wrong.

            }
        }
    }

}
