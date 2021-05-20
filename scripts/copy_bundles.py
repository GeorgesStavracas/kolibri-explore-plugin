#!/usr/bin/env python
import argparse
import json
import os.path
import shutil
import subprocess

from _common import get_available_overrides
from _common import TEMPLATE_WORKSPACE

DEFAULT_ZIP_FILENAME = "custom-channel-ui.zip"
SKIP_WORKSPACES = ["kolibri-api", TEMPLATE_WORKSPACE]


def validate_dir_path(path):
    if os.path.isdir(path):
        return path
    else:
        raise NotADirectoryError(path)


def get_packages_info():
    result = subprocess.run(
        ["yarn", "-s", "lerna", "list", "--json", "--loglevel", "error"],
        stdout=subprocess.PIPE,
    )
    output = result.stdout.decode("utf-8")
    return json.loads(output)


def get_workspaces():
    info = get_packages_info()
    return [i["name"] for i in info if i["name"] not in SKIP_WORKSPACES]


def workspace_to_appname(workspace):
    # Remove the last '-ui' to obtain the app name:
    return "-".join(workspace.split("-")[:-1])


def copy_bundle_zip(
    workspace, dest_path, app_name=None, zip_name=DEFAULT_ZIP_FILENAME
):
    bundle_zip_path = os.path.join("packages", workspace, zip_name)
    if not os.path.exists(bundle_zip_path):
        print(f"Skipping {workspace}, zip not found.")
        return
    if app_name is None:
        app_name = workspace_to_appname(workspace)
    print(f"Copying presentation for {app_name}...")
    dest_zip_path = os.path.join(dest_path, app_name)
    if not os.path.exists(dest_zip_path):
        os.mkdir(dest_zip_path)
    shutil.copy(
        bundle_zip_path, os.path.join(dest_zip_path, DEFAULT_ZIP_FILENAME)
    )


parser = argparse.ArgumentParser(
    description="Copy all ZIP bundles to the desired destination path.",
)
parser.add_argument("dest_path", type=validate_dir_path)
args = parser.parse_args()

for workspace in get_workspaces():
    copy_bundle_zip(workspace, args.dest_path)

for override in get_available_overrides():
    zip_name = f"{override}.zip"
    copy_bundle_zip(TEMPLATE_WORKSPACE, args.dest_path, override, zip_name)
