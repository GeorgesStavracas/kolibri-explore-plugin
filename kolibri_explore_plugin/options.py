option_spec = {
    "Explore": {
        "APPS_BUNDLE_PATH": {
            "type": "string",
            "default": "",
            "description": """
                Location where channel app bundles are stored. Defaults
                to the package install directory.
            """,
        },
        "SHOW_AS_STANDALONE_CHANNEL": {
            "type": "boolean",
            "default": False,
            "description": """
                Whether to inform the channel presentation that it is
                standalone.
            """,
        },
    },
}
