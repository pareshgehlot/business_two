FROM node:latest

RUN mkdir -p /home/ec2-user/docker_contents/business_two
WORKDIR /home/ec2-user/docker_contents/business_two

COPY package.json /home/ec2-user/docker_contents/business_two/

RUN npm install

COPY . /home/ec2-user/docker_contents/business_two/

EXPOSE 5000

CMD ["npm","start"]