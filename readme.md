## @npvd/npvd-pnpm-v6

This is an npvd support package for pnpm v6 lock files. It is used to help isolate pnpm lockfile dependencies that still support v6 lockfiles from newer dependencies that dropped support for v6. Both dependencies cannot be simultaneously installed on a project without scoping one of them to a transitive dependency, like this support package.
