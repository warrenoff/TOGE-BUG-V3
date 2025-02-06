# replit.nix
{ pkgs }: {
  deps = [
    pkgs.nodejs-18_x
    pkgs.nodePackages.npm
    pkgs.python3
  ];

  env = {
    NODE_ENV = "production";
  };
}
