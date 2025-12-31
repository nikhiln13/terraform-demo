variable "aws_region" {
  default = "ap-south-1"
}

variable "instance_type" {
  default = "t2.micro"
}

variable "ami_id" {
  description = "Amazon Linux 2 AMI"
  default     = "ami-0a0f1259dd1c90938"
}

variable "instance_name" {
  default = "docker-website"
}
