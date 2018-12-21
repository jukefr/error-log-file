workflow "Build, Test, and Publish" {
  on = "push"
  resolves = ["Publish"]
}

action "Install" {
  uses = "actions/npm@master"
  args = "install"
}

action "Build" {
  needs = "Install"
  uses = "actions/npm@master"
  args = "run build"
}

# Filter for a new tag
action "isMaster" {
  needs = "Build"
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "Publish" {
  needs = "isMaster"
  uses = "actions/npm@master"
  args = "publish"
  secrets = ["NPM_AUTH_TOKEN"]
}
