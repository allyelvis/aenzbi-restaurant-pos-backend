{ pkgs, ... }:

let
  nodejs-14 = pkgs.nodejs14;
in

{
  # Define the package attributes
  aenzbi-restaurant-backend = pkgs.stdenv.mkDerivation rec {
    name = "aenzbi-restaurant-backend";
    version = "1.0.0";
    src = ./aenzbi-restaurant-backend; # Path to your backend source code

    # Specify dependencies
    buildInputs = [
      nodejs-14
      pkgs.yarn # or pkgs.npm, depending on your package manager
    ];

    # Specify build phases
    buildPhase = ''
      yarn install --pure-lockfile
    '';

    # Specify the start command
    installPhase = ''
      mkdir -p $out/aenzbi-restaurant-backend
      cp -r * $out/aenzbi-restaurant-backend
    '';

    meta = with pkgs.stdenv.lib; {
      description = "Backend for AENZBi Restaurant POS system";
      license = licenses.mit;
      maintainers = [ maintainers.yourName ]; # Replace with your name or email
    };
  };
}
