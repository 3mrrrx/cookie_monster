
############################################
# docker and bash untilities
############################################

# get public ip on linux
curl https://ipinfo.io/ip

# list all docker contianer
docker container ls --all


docker container rm webserver


# building a docker image with a human readable tag

docker build -t="webserver" .



# commiting a docker contianer to an image

docker ps

docker commit c3f279d17e0a  svendowideit/testimage:version3

docker images


start docker container from "webserver" docker image, import current work directory
and open ports 8080 to 8081

docker run --rm -it --publish 127.0.0.20:8080:8080 -p 127.0.0.20:8081:8081 -v ${pwd}:/home/data webserver
