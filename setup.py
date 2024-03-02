from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in life2homewebsite/__init__.py
from life2homewebsite import __version__ as version

setup(
	name="life2homewebsite",
	version=version,
	description="Life2Home Website",
	author="Govind Jangid",
	author_email="govind@eternaltechs.in",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
