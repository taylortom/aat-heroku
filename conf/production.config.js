const path = require('path');

module.exports = {
  "adapt-authoring-core": {
    "root_dir": process.cwd(),
    "temp_dir": path.join(process.cwd(), 'temp')
  },
  "adapt-authoring-docs": {
    "output_dir": path.join(process.cwd(), 'docs-build')
  },
  "adapt-authoring-jsonschema": {
    "formatOverrides": {
      "password": /^(?=.*[A-Z])(?=.*[\d])(?=.*[\W])[\w\W]{8,}$/
    }
  },
  "adapt-authoring-localauth": {
    "maxLoginAttempts": 2
  },
  "adapt-authoring-logger": {
    "levels": [
      "error",
      "warn",
      "success",
      "info",
      "debug"
    ]
  },
  "adapt-authoring-middleware": {
    "acceptedTypes": [
      "application/json",
      "application/zip"
    ]
  },
  "adapt-authoring-roles": {
    "roleDefinitions": [
      {
        "shortName": "authduser",
        "displayName": "Authenticated User",
        "scopes": [
          "clear:session",
          "read:config",
          "read:lang"
        ]
      },
      {
        "shortName" : "contentcreator",
        "displayName" : "Content creator",
        "extends": 'authduser',
        "scopes" : [
            "read:content",
            "write:content",
            "preview:adapt",
            "publish:adapt",
            "read:tags",
            "write:tags",
            "read:revisions",
            "write:revisions"
        ],
      },
      {
        "shortName" : "superuser",
        "displayName" : "Super user",
        "scopes" : [ "mighty:max"]
      },
      {
        "shortName" : "useradmin",
        "displayName" : "User admin",
        "scopes" : [
            "read:users",
            "write:users"
        ]
      }
    ],
    "defaultRoles": ["authduser"]
  },
  "adapt-authoring-server": {
    "logStackOnError": true
  }
};
